import "i18next";

import components from "../public/locales/en/components.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: 'components';

    resources: {
      components: typeof components;
    };
  }
}
