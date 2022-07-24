import NewAdminForm from "../components/auth/new-admin-form.component";
import AdminLoginForm from "../components/auth/admin-login-form.component";
import { Flex } from "@chakra-ui/react";

const AdminAuth = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify={"center"}
      alignItems={"flex-start"}
    >
      <AdminLoginForm />
      <NewAdminForm />
    </Flex>
  );
};

export default AdminAuth;
