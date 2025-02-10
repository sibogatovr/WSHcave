import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput
} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = (apiUrl) => ({
  ...simpleRestProvider(apiUrl),

  getList: async (resource, params) => {
    const url = `${apiUrl}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      data: data,
      total: data.length,
    };
  },

  getOne: async (resource, params) => {
    const url = `${apiUrl}/${params.id}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка загрузки новости");
    }
    const data = await response.json();

    return { data };
  },

  create: async (resource, params) => {
    const url = `${apiUrl}`;
    const newsData = {
        ...params.data,
        publishedDate: new Date(params.data.publishedDate).toISOString()
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsData),
    });

    if (!response.ok) {
        throw new Error('Ошибка создания новости');
    }

    const data = await response.json();
    return { data };
},

  update: async (resource, params) => {
    const url = `${apiUrl}/${params.id}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params.data),
    });

    if (!response.ok) {
      throw new Error("Ошибка обновления новости");
    }

    return { data: params.data };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/${params.id}`;

    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Ошибка удаления новости");
    }

    return { data: params.previousData };
  },
});

const NewsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="content" multiline />
      <TextInput source="imageUrl" label="Ссылка на изображение" />
      <DateTimeInput source="publishedDate" label="Дата публикации" />
    </SimpleForm>
  </Create>
);

const NewsEdit = () => (
  <EditGuesser>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="content" multiline />
      <TextInput source="imageUrl" label="Ссылка на изображение" />
      <DateTimeInput source="publishedDate" label="Дата публикации" />
    </SimpleForm>
  </EditGuesser>
);

const AdminPanel = () => (
  <Admin dataProvider={dataProvider('http://localhost:5228/api/news')} basename='/admin'>
      <Resource 
          name="news" 
          list={ListGuesser} 
          edit={NewsEdit} 
          create={NewsCreate} 
          show={ShowGuesser} 
      />
  </Admin>
);

export default AdminPanel;
