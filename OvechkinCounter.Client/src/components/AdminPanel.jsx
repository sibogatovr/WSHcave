import { Admin, Resource, ListGuesser, EditGuesser, Create, SimpleForm, TextInput } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

// Кастомизируем dataProvider
const dataProvider = (apiUrl) => ({
    ...simpleRestProvider(apiUrl),
    
    // Переопределяем метод getList
    getList: async (resource, params) => {
      // Отправляем запрос на /api/news без дополнительных параметров
      const url = `${apiUrl}`;
  
      // Выполняем запрос без фильтров, пагинации и сортировки
      const response = await fetch(url);
      const data = await response.json();
      
      return {
        data: data,
        total: data.length, // Указываем общее количество элементов, если нужно
      };
    },
    
    // Можно переопределить другие методы, если необходимо
    // getOne, create, update, delete, и так далее
  });

const NewsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="content" multiline />
    </SimpleForm>
  </Create>
);

const AdminPanel = () => (
    <Admin dataProvider={dataProvider('http://localhost:5228/api/news')} basename='/admin'>
    <Resource name="news" list={ListGuesser} edit={EditGuesser} create={NewsCreate} />
  </Admin>
);

export default AdminPanel;
