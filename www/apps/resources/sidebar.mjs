import { sidebarAttachHrefCommonOptions } from "./utils/sidebar-attach-common-options.mjs"

/** @type {import('types').RawSidebarItemType[]} */
export const sidebar = sidebarAttachHrefCommonOptions([
  {
    path: "/",
    title: "Overview",
    hasTitleStyling: true,
  },
  {
    path: "/commerce-modules",
    title: "Commerce Modules",
    isChildSidebar: true,
    hasTitleStyling: true,
    children: [
      {
        path: "/commerce-modules/api-key",
        title: "API Key Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/api-key/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/api-key/concepts",
                title: "API Key Concepts",
              },
              {
                path: "/commerce-modules/api-key/relations-to-other-modules",
                title: "Relation to Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/api-key",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "API Key Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/api_key/IApiKeyModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/api-key/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "API Key Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/api_key_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/api-key/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/auth",
        title: "Auth Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/auth/module-options",
            title: "Module Options",
          },
          {
            path: "/commerce-modules/auth/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/auth/auth-identity-and-actor-types",
                title: "Identity and Actor Types",
              },
              {
                path: "/commerce-modules/auth/auth-providers",
                title: "Auth Providers",
                children: [
                  {
                    path: "/commerce-modules/auth/auth-providers/emailpass",
                    title: "Emailpass Auth Provider Module",
                  },
                ],
              },
              {
                path: "/commerce-modules/auth/authentication-route",
                title: "Authentication Route",
              },
              {
                path: "/commerce-modules/auth/auth-flows",
                title: "Auth Flows",
              },
            ],
          },
          {
            title: "Guides",
            children: [
              {
                path: "/commerce-modules/auth/create-actor-type",
                title: "Create an Actor Type",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/auth/provider",
                title: "Create Auth Provider Module",
              },
              {
                path: "/references/auth",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Auth Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/auth/IAuthModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/auth/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Auth Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/auth_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/auth/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/cart",
        title: "Cart Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/cart/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/cart/concepts",
                title: "Cart Concepts",
              },
              {
                path: "/commerce-modules/cart/promotions",
                title: "Promotion Adjustments",
              },
              {
                path: "/commerce-modules/cart/tax-lines",
                title: "Tax Lines",
              },
              {
                path: "/commerce-modules/cart/relations-to-other-modules",
                title: "Relations to Other Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/cart",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Cart Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/cart/ICartModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/cart/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Cart Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/cart_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/cart/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/currency",
        title: "Currency Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/currency/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/currency/relations-to-other-modules",
                title: "Relation to Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/currency",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Cart Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/currency/ICurrencyModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/currency/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Currency Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/currency_models/variables",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/currency/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/customer",
        title: "Customer Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/customer/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/customer/customer-accounts",
                title: "Customer Accounts",
              },
              {
                path: "/commerce-modules/customer/relations-to-other-modules",
                title: "Relations to Other Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/customer",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Customer Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/customer/ICustomerModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/customer/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Customer Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/customer_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/customer/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/fulfillment",
        title: "Fulfillment Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/fulfillment/module-options",
            title: "Module Options",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/fulfillment/concepts",
                title: "Fulfillment Concepts",
              },
              {
                path: "/commerce-modules/fulfillment/fulfillment-provider",
                title: "Fulfillment Provider",
              },
              {
                path: "/commerce-modules/fulfillment/shipping-option",
                title: "Shipping Option",
              },
              {
                path: "/commerce-modules/fulfillment/item-fulfillment",
                title: "Item Fulfillment",
              },
              {
                path: "/commerce-modules/fulfillment/relations-to-other-modules",
                title: "Relations to Other Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/fulfillment/provider",
                title: "Create Fulfillment Provider Module",
              },
              {
                path: "/references/fulfillment",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle:
                  "Fulfillment Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/fulfillment/IFulfillmentModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/fulfillment/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Fulfillment Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/fulfillment_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/fulfillment/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/inventory",
        title: "Inventory Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/inventory/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/inventory/concepts",
                title: "Inventory Concepts",
              },
              {
                path: "/commerce-modules/inventory/inventory-in-flows",
                title: "Inventory in Flows",
              },
              {
                path: "/commerce-modules/inventory/relations-to-other-modules",
                title: "Relation to Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/inventory_next",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Inventory Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/inventory_next/IInventoryService/methods",
                  },
                ],
              },
              {
                path: "/references/inventory_next/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Inventory Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/inventory_next_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/inventory/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/order",
        title: "Order Module",
        hasTitleStyling: true,
        children: [
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/order/concepts",
                title: "Order Concepts",
              },
              {
                path: "/commerce-modules/order/promotion-adjustments",
                title: "Promotions Adjustments",
              },
              {
                path: "/commerce-modules/order/tax-lines",
                title: "Tax Lines",
              },
              {
                path: "/commerce-modules/order/transactions",
                title: "Transactions",
              },
              {
                path: "/commerce-modules/order/order-versioning",
                title: "Order Versioning",
              },
              {
                path: "/commerce-modules/order/return",
                title: "Return",
              },
              {
                path: "/commerce-modules/order/exchange",
                title: "Exchange",
              },
              {
                path: "/commerce-modules/order/claim",
                title: "Claim",
              },
              {
                path: "/commerce-modules/order/relations-to-other-modules",
                title: "Relations to Other Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/order",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Order Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/order/IOrderModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/order/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Order Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/order_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/order/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/payment",
        title: "Payment Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/payment/module-options",
            title: "Module Options",
          },
          {
            path: "/commerce-modules/payment/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/payment/payment-collection",
                title: "Payment Collections",
              },
              {
                path: "/commerce-modules/payment/payment-session",
                title: "Payment Session",
              },
              {
                path: "/commerce-modules/payment/payment",
                title: "Payment",
              },
              {
                path: "/commerce-modules/payment/payment-provider",
                title: "Payment Provider Module",
                children: [
                  {
                    path: "/commerce-modules/payment/payment-provider/stripe",
                    title: "Stripe",
                  },
                ],
              },
              {
                path: "/commerce-modules/payment/webhook-events",
                title: "Webhook Events",
              },
              {
                path: "/commerce-modules/payment/relation-to-other-modules",
                title: "Relations to Other Modules",
              },
            ],
          },
          {
            title: "Guides",
            children: [
              {
                path: "/commerce-modules/payment/payment-flow",
                title: "Accept Payment Flow",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/payment/provider",
                title: "Payment Provider Reference",
              },
              {
                path: "/references/payment",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Payment Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/payment/IPaymentModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/payment/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Payment Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/payment_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/payment/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/pricing",
        title: "Pricing Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/pricing/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/pricing/concepts",
                title: "Pricing Concepts",
              },
              {
                path: "/commerce-modules/pricing/price-rules",
                title: "Price Rules",
              },
              {
                path: "/commerce-modules/pricing/price-calculation",
                title: "Prices Calculation",
              },
              {
                path: "/commerce-modules/pricing/tax-inclusive-pricing",
                title: "Tax-Inclusive Pricing",
              },
              {
                path: "/commerce-modules/pricing/relations-to-other-modules",
                title: "Relation to Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/pricing",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Pricing Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/pricing/IPricingModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/pricing/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Pricing Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/pricing_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/pricing/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/product",
        title: "Product Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/product/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/product/relations-to-other-modules",
                title: "Relation to Modules",
              },
            ],
          },
          {
            title: "Guides",
            autogenerate_path: "/commerce-modules/product/guides",
          },
          {
            title: "References",
            children: [
              {
                path: "/references/product",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Product Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/product/IProductModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/product/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Product Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/product_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/product/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/promotion",
        title: "Promotion Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/promotion/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/promotion/concepts",
                title: "Promotion",
              },
              {
                path: "/commerce-modules/promotion/application-method",
                title: "Application Method",
              },
              {
                path: "/commerce-modules/promotion/campaign",
                title: "Campaign",
              },
              {
                path: "/commerce-modules/promotion/actions",
                title: "Promotion Actions",
              },
              {
                path: "/commerce-modules/promotion/relations-to-other-modules",
                title: "Relation to Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/promotion",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Promotion Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/promotion/IPromotionModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/promotion/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Promotion Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/promotion_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/promotion/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/region",
        title: "Region Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/region/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/region/relations-to-other-modules",
                title: "Relations to Other Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/region",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Region Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/region/IRegionModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/region/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Region Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/region_models/variables",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/region/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/sales-channel",
        title: "Sales Channel Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/sales-channel/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/sales-channel/publishable-api-keys",
                title: "Publishable API Keys",
              },
              {
                path: "/commerce-modules/sales-channel/relations-to-other-modules",
                title: "Relation to Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/sales-channel",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle:
                  "Sales Channel Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/sales_channel/ISalesChannelModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/sales-channel/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Sales Channel Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/sales_channel_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/sales-channel/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/stock-location",
        title: "Stock Location Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/stock-location/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/stock-location/concepts",
                title: "Stock Location Concepts",
              },
              {
                path: "/commerce-modules/stock-location/relations-to-other-modules",
                title: "Relation to Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/stock-location",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle:
                  "Stock Location Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/stock_location_next/IStockLocationService/methods",
                  },
                ],
              },
              {
                path: "/references/stock-location/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle:
                  "Stock Location Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/stock_location_next_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/stock-location/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/store",
        title: "Store Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/store/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/store/relations-to-other-modules",
                title: "Relation to Modules",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/store",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Store Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/store/IStoreModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/store/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Store Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/store_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/store/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/tax",
        title: "Tax Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/tax/module-options",
            title: "Module Options",
          },
          {
            path: "/commerce-modules/tax/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/tax/tax-region",
                title: "Tax Region",
              },
              {
                path: "/commerce-modules/tax/tax-rates-and-rules",
                title: "Tax Rates and Rules",
              },
              {
                path: "/commerce-modules/tax/tax-calculation-with-provider",
                title: "Tax Calculation and Providers",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/tax/provider",
                title: "Tax Provider Reference",
              },
              {
                path: "/references/tax",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "Tax Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/tax/ITaxModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/tax/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "Tax Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/tax_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/tax/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
      {
        path: "/commerce-modules/user",
        title: "User Module",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/user/module-options",
            title: "Module Options",
          },
          {
            path: "/commerce-modules/user/examples",
            title: "Examples",
          },
          {
            title: "Concepts",
            children: [
              {
                path: "/commerce-modules/user/user-creation-flows",
                title: "User Creation Flows",
              },
            ],
          },
          {
            title: "References",
            children: [
              {
                path: "/references/user",
                title: "Main Service Reference",
                isChildSidebar: true,
                childSidebarTitle: "User Module's Main Service Reference",
                children: [
                  {
                    title: "Methods",
                    hasTitleStyling: true,
                    autogenerate_path:
                      "/references/user/IUserModuleService/methods",
                  },
                ],
              },
              {
                path: "/references/user/models",
                title: "Data Models Reference",
                isChildSidebar: true,
                childSidebarTitle: "User Module Data Models Reference",
                children: [
                  {
                    title: "Data Models",
                    hasTitleStyling: true,
                    autogenerate_path: "/references/user_models/classes",
                  },
                ],
              },
              // {
              //   path: "/commerce-modules/user/events",
              //   title: "Events Reference",
              // },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/integrations",
    title: "Integrations",
    isChildSidebar: true,
    hasTitleStyling: true,
    children: [
      {
        title: "File",
        hasTitleStyling: true,
        children: [
          {
            path: "/architectural-modules/file/s3",
            title: "AWS S3 (and Compatible APIs)",
          },
        ],
      },
      {
        title: "Notification",
        hasTitleStyling: true,
        children: [
          {
            path: "/architectural-modules/notification/sendgrid",
            title: "SendGrid",
          },
        ],
      },
      {
        title: "Payment",
        hasTitleStyling: true,
        children: [
          {
            path: "/commerce-modules/payment/payment-provider/stripe",
            title: "Stripe",
          },
        ],
      },
    ],
  },

  {
    path: "/recipes",
    title: "Recipes",
    hasTitleStyling: true,
    isChildSidebar: true,
    children: [
      {
        path: "/recipes/marketplace",
        title: "Marketplace",
        children: [
          {
            path: "/recipes/marketplace/examples/vendors",
            title: "Example: Vendors",
          },
        ],
      },
      {
        path: "/recipes/subscriptions",
        title: "Subscriptions",
        children: [
          {
            path: "/recipes/subscriptions/examples/standard",
            title: "Example",
          },
        ],
      },
      {
        path: "/recipes/digital-products",
        title: "Digital Products",
        children: [
          {
            path: "/recipes/digital-products/examples/standard",
            title: "Example",
          },
        ],
      },
      {
        path: "/recipes/b2b",
        title: "B2B",
      },
      {
        path: "/recipes/commerce-automation",
        title: "Commerce Automation",
      },
      {
        path: "/recipes/ecommerce",
        title: "Ecommerce",
      },
      {
        path: "/recipes/integrate-ecommerce-stack",
        title: "Integrate Ecommerce Stack",
      },
      {
        path: "/recipes/multi-region-store",
        title: "Multi-Region Store",
      },
      {
        path: "/recipes/omnichannel",
        title: "Omnichannel Store",
      },
      {
        path: "/recipes/oms",
        title: "OMS",
      },
      {
        path: "/recipes/personalized-products",
        title: "Personalized Products",
      },
      {
        path: "/recipes/pos",
        title: "POS",
      },
    ],
  },
  {
    title: "SDKs and Tools",
    hasTitleStyling: true,
    children: [
      {
        path: "/create-medusa-app",
        title: "create-medusa-app",
      },
      {
        path: "/medusa-cli",
        title: "Medusa CLI",
      },
      {
        path: "/nextjs-starter",
        title: "Next.js Starter",
      },
    ],
  },
  {
    path: "/architectural-modules",
    title: "Architectural Modules",
    isChildSidebar: true,
    hasTitleStyling: true,
    children: [
      {
        path: "/architectural-modules/cache",
        title: "Cache Modules",
        hasTitleStyling: true,
        children: [
          {
            path: "/architectural-modules/cache/in-memory",
            title: "In-Memory",
          },
          {
            path: "/architectural-modules/cache/redis",
            title: "Redis",
          },
          {
            title: "Guides",
            children: [
              {
                path: "/architectural-modules/cache/create",
                title: "Create Cache Module",
              },
            ],
          },
        ],
      },
      {
        path: "/architectural-modules/event",
        title: "Event Modules",
        hasTitleStyling: true,
        children: [
          {
            path: "/architectural-modules/event/local",
            title: "Local",
          },
          {
            path: "/architectural-modules/event/redis",
            title: "Redis",
          },
          {
            title: "Guides",
            children: [
              {
                path: "/architectural-modules/event/create",
                title: "Create Event Module",
              },
            ],
          },
        ],
      },
      {
        path: "/architectural-modules/file",
        title: "File Provider Modules",
        hasTitleStyling: true,
        children: [
          {
            path: "/architectural-modules/file/local",
            title: "Local",
          },
          {
            path: "/architectural-modules/file/s3",
            title: "AWS S3 (and Compatible APIs)",
          },
          {
            title: "Guides",
            children: [
              {
                path: "/references/file-provider-module",
                title: "Create File Provider",
              },
            ],
          },
        ],
      },
      {
        path: "/architectural-modules/notification",
        title: "Notification Provider Modules",
        hasTitleStyling: true,
        children: [
          {
            path: "/architectural-modules/notification/local",
            title: "Local",
          },
          {
            path: "/architectural-modules/notification/sendgrid",
            title: "SendGrid",
          },
          {
            title: "Guides",
            children: [
              {
                path: "/architectural-modules/notification/send-notification",
                title: "Send Notification",
              },
              {
                path: "/references/notification-provider-module",
                title: "Create Notification Provider",
              },
            ],
          },
        ],
      },
      {
        path: "/architectural-modules/workflow-engine",
        title: "Workflow Engine Modules",
        hasTitleStyling: true,
        children: [
          {
            path: "/architectural-modules/workflow-engine/in-memory",
            title: "In-Memory",
          },
          {
            path: "/architectural-modules/workflow-engine/redis",
            title: "Redis",
          },
        ],
      },
    ],
  },
  {
    path: "/storefront-development",
    title: "Storefront Development",
    hasTitleStyling: true,
    isChildSidebar: true,
    children: [
      {
        path: "/storefront-development/tips",
        title: "Tips",
      },
      {
        path: "/storefront-development/regions",
        title: "Regions",
        children: [
          {
            path: "/storefront-development/regions/list",
            title: "List Regions",
          },
          {
            path: "/storefront-development/regions/store-retrieve-region",
            title: "Store and Retrieve Regions",
          },
          {
            path: "/storefront-development/regions/context",
            title: "Region React Context",
          },
        ],
      },
      {
        path: "/storefront-development/products",
        title: "Products",
        children: [
          {
            path: "/storefront-development/products/list",
            title: "List Products",
          },
          {
            path: "/storefront-development/products/retrieve",
            title: "Retrieve a Product",
          },
          {
            path: "/storefront-development/products/variants",
            title: "Select a Variant",
          },
          {
            path: "/storefront-development/products/price",
            title: "Retrieve Variant Prices",
            autogenerate_path: "storefront-development/products/price/examples",
          },
          {
            path: "/storefront-development/products/categories",
            title: "Categories",
            children: [
              {
                path: "/storefront-development/products/categories/list",
                title: "List Categories",
              },
              {
                path: "/storefront-development/products/categories/retrieve",
                title: "Retrieve a Category",
              },
              {
                path: "/storefront-development/products/categories/products",
                title: "Retrieve a Category's Products",
              },
              {
                path: "/storefront-development/products/categories/nested-categories",
                title: "Retrieve Nested Categories",
              },
            ],
          },
          {
            path: "/storefront-development/products/collections",
            title: "Collections",
            children: [
              {
                path: "/storefront-development/products/collections/list",
                title: "List Collections",
              },
              {
                path: "/storefront-development/products/collections/retrieve",
                title: "Retrieve a Collection",
              },
              {
                path: "/storefront-development/products/collections/products",
                title: "Retrieve a Collection's Products",
              },
            ],
          },
        ],
      },
      {
        path: "/storefront-development/cart",
        title: "Carts",
        children: [
          {
            path: "/storefront-development/cart/create",
            title: "Create Cart",
          },
          {
            path: "/storefront-development/cart/retrieve",
            title: "Retrieve Cart",
          },
          {
            path: "/storefront-development/cart/context",
            title: "Cart React Context",
          },
          {
            path: "/storefront-development/cart/update",
            title: "Update Cart",
          },
          {
            path: "/storefront-development/cart/manage-items",
            title: "Manage Line Items",
          },
        ],
      },
      {
        path: "/storefront-development/checkout",
        title: "Checkout",
        children: [
          {
            path: "/storefront-development/checkout/email",
            title: "1. Enter Email",
          },
          {
            path: "/storefront-development/checkout/address",
            title: "2. Enter Address",
          },
          {
            path: "/storefront-development/checkout/shipping",
            title: "3. Choose Shipping Method",
          },
          {
            path: "/storefront-development/checkout/payment",
            title: "4. Choose Payment Provider",
            children: [
              {
                path: "/storefront-development/checkout/payment/stripe",
                title: "Example: Stripe",
              },
            ],
          },
          {
            path: "/storefront-development/checkout/complete-cart",
            title: "5. Complete Cart",
          },
        ],
      },
      {
        path: "/storefront-development/customers",
        title: "Customers",
        children: [
          {
            path: "/storefront-development/customers/register",
            title: "Register Customer",
          },
          {
            path: "/storefront-development/customers/login",
            title: "Login Customer",
          },
          {
            path: "/storefront-development/customers/retrieve",
            title: "Retrieve Customer",
          },
          {
            path: "/storefront-development/customers/context",
            title: "Customer React Context",
          },
          {
            path: "/storefront-development/customers/profile",
            title: "Edit Customer Profile",
          },
          {
            path: "/storefront-development/customers/addresses",
            title: "Manage Customer Addresses",
          },
          {
            path: "/storefront-development/customers/log-out",
            title: "Log-out Customer",
          },
        ],
      },
    ],
  },
  {
    path: "/references/medusa-config",
    title: "Medusa Configurations",
    hasTitleStyling: true,
  },
  {
    title: "General",
    hasTitleStyling: true,
    children: [
      {
        path: "/upgrade-guides",
        title: "Upgrade Guides",
      },
      {
        path: "/deployment",
        title: "Deployment Guides",
        isChildSidebar: true,
        children: [
          {
            title: "Medusa Application",
            hasTitleStyling: true,
            autogenerate_path: "/deployment/medusa-application",
          },
          {
            title: "Medusa Admin",
            hasTitleStyling: true,
            autogenerate_path: "/deployment/admin",
          },
          {
            title: "Next.js Starter",
            hasTitleStyling: true,
            autogenerate_path: "/deployment/storefront",
          },
        ],
      },
      {
        path: "/troubleshooting",
        title: "Troubleshooting Guides",
        isChildSidebar: true,
        children: [
          {
            title: "Installation",
            hasTitleStyling: true,
            children: [
              {
                path: "/troubleshooting/create-medusa-app-errors",
                title: "Create Medusa App Errors",
              },
              {
                path: "/troubleshooting/errors-installing-cli",
                title: "Errors Installing CLI",
              },
              {
                path: "/troubleshooting/general-errors",
                title: "General Errors",
              },
            ],
          },
          {
            title: "Medusa Application",
            hasTitleStyling: true,
            children: [
              {
                path: "/troubleshooting/eaddrinuse",
                title: "EADDRINUSE Error",
              },
              {
                path: "/troubleshooting/database-errors",
                title: "Database Errors",
              },
            ],
          },
          {
            title: "Upgrade",
            hasTitleStyling: true,
            children: [
              {
                path: "/troubleshooting/errors-after-upgrading",
                title: "Errors After Upgrading",
              },
            ],
          },
          {
            title: "Frontend",
            hasTitleStyling: true,
            children: [
              {
                path: "/troubleshooting/cors-errors",
                title: "CORS Errors",
              },
            ],
          },
          {
            title: "Integrations",
            hasTitleStyling: true,
            children: [
              {
                path: "/troubleshooting/s3",
                title: "S3 Module Provider Errors",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Lists",
    hasTitleStyling: true,
    children: [
      {
        path: "/medusa-container-resources",
        title: "Medusa Container Resources",
      },
      // {
      //   path: "/events-reference",
      //   title: "Events",
      // },
      {
        path: "/admin-widget-injection-zones",
        title: "Admin Widget Injection Zones",
      },
    ],
  },
  {
    title: "References",
    hasTitleStyling: true,
    children: [
      {
        path: "/references/workflows",
        title: "Workflow API",
        isChildSidebar: true,
        children: [
          {
            title: "Functions",
            hasTitleStyling: true,
            autogenerate_path: "/references/workflows/functions",
          },
        ],
      },
      {
        path: "/references/data-model",
        title: "Data Model API",
        childSidebarTitle: "Data Model API Reference",
        isChildSidebar: true,
        children: [
          {
            path: "/references/data-model/define",
            title: "Define Method",
            hasTitleStyling: true,
          },
          {
            path: "/references/data-model/property-types",
            title: "Property Types",
            hasTitleStyling: true,
            autogenerate_path: "/references/dml/Property_Types/methods",
          },
          {
            path: "/references/data-model/relationship-methods",
            title: "Relationship Methods",
            hasTitleStyling: true,
            autogenerate_path: "/references/dml/Relationship_Methods/methods",
          },
          {
            path: "/references/data-model/model-methods",
            title: "Model Methods",
            hasTitleStyling: true,
            autogenerate_path: "/references/dml/Model_Methods/methods",
          },
          {
            path: "/references/data-model/property-configuration",
            title: "Property Configuration Methods",
            hasTitleStyling: true,
            autogenerate_path:
              "/references/dml/Property_Configuration_Methods/methods",
          },
        ],
      },
      {
        path: "/service-factory-reference",
        title: "Service Factory Reference",
        isChildSidebar: true,
        children: [
          {
            title: "Methods",
            hasTitleStyling: true,
            autogenerate_path: "/service-factory-reference/methods",
          },
          {
            title: "Tips",
            hasTitleStyling: true,
            autogenerate_path: "/service-factory-reference/tips",
          },
        ],
      },
      {
        path: "/references/helper-steps",
        title: "Helper Steps Reference",
        isChildSidebar: true,
        autogenerate_path: "/references/helper_steps/functions",
      },
      // TODO uncomment once available.
      // {
      //   title: "Medusa Workflows Reference",
      //   path: "/medusa-workflows-reference",
      //   isChildSidebar: true,
      //   custom_autogenerate: "core-flows",
      // },
    ],
  },
  {
    title: "Other",
    hasTitleStyling: true,
    children: [
      {
        title: "Contribution Guidelines",
        children: [
          {
            path: "/contribution-guidelines/docs",
            title: "Docs",
          },
          // {
          //   path: "/contribution-guidelines/admin-translations",
          //   title: "Admin Translations",
          // },
        ],
      },
      {
        path: "/usage",
        title: "Usage",
      },
    ],
  },
])
