import { MyCardContainer } from "containers";
import { withMainLayout } from "layout";

export const MyCardPage: React.FC = withMainLayout(() => {
  return <MyCardContainer />;
});
