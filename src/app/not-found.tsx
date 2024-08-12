import { TbError404Off } from "react-icons/tb";
import MainSection from "../components/common/main_section/mainSection";
import Wrapper from "./layout/wrapper/layout";

const NotFound = () => {
  return (
    <Wrapper>
      <MainSection withStyle="flex flex-col gap-1 items-center justify-center">
        <TbError404Off size={100} />
        <h1 className="font-bold">Not Found!</h1>
      </MainSection>
    </Wrapper>
  );
};

export default NotFound;
