import {HomeModel} from "../models/config/home.config";
import {BlockType} from "../models/layout/block";
import {ComponentType} from "../models/layout/component";

export const HomeConfig: HomeModel = {
  title: 'Welcome',
  carousel: {
    title: 'Home',
    icon: 'home'
  },
  sections:
    {
      title: 'Welcome',
      subtitle: '',
      gridConfig: {
        cols: 2,
        rows: 4,
        rowHeight: 330
      },
      blocks: [
        {
          title: 'Latest Articles',
          subtitle: '',
          type: BlockType.FullWidth,
          components: [
            {
              title: 'Articles',
              type: ComponentType.DefaultCard,
              color: 'primary',
            },
          ]
        }
      ],
    }
};
