import { useEffect } from "react";
import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { Dashboard } from "./dashboard";
import { authProvider } from "./authProvider";
import { PostCreate, PostEdit, PostList } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

export const App = () => {
  useEffect(() => {
    // console.log(ListGuesser);
  }, []);

  return (
    <Admin
      authProvider={authProvider}
      dashboard={Dashboard}
      dataProvider={dataProvider}
    >
      <Resource
        name="users"
        list={UserList}
        show={ShowGuesser}
        recordRepresentation="name"
        icon={UserIcon}
      />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      {/* <Resource name="users" list={UserList} /> */}
    </Admin>
  );
};
