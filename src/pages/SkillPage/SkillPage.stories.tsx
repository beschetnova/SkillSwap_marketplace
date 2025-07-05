import type { Meta } from '@storybook/react-vite';
import SkillPage from "./SkillPage";
import { MemoryRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from '../../services/mockStore/mockStore';
import { LayoutPageHOC } from "../../utils/storiesHOC/LayoutPageHOC/LayoutPageHOC";

export default {
  title: "Page/SkillPage",
  component: SkillPage,
  decorators: [(Story) => (
    <MemoryRouter initialEntries={["/skill/1"]}>
      <Provider store={store}>
        <Routes>
          <Route path="/skill/:userId" element={<Story />} />
        </Routes>
      </Provider>
    </MemoryRouter>)],
} as Meta;

export const Default = () => <LayoutPageHOC><SkillPage /></LayoutPageHOC>