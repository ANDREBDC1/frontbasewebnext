import type { NextPage } from "next";
import PageTitle from "ui/components/PageTitle";
import UserInformation from "ui/components/UserInformation";
const Home: NextPage = () => {
  return (
    <div>
      <PageTitle title="Titulo Pagina" subtitle="Subtítulo da pagina" />
      <UserInformation
        name="André"
        picture="https://github.com/ANDREBDC1.png"
        description="Teste"
      />
    </div>
  );
};

export default Home;
