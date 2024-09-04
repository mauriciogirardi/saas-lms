import { IconAffiliateDuoToneBlack } from "@/icons/affiliate-duo-tone-black"
import { IconBusiness } from "@/icons/bisiness"
import { IconChat } from "@/icons/chat"
import { IconCourses } from "@/icons/courses"
import { IconCreditCard } from "@/icons/credit-card"
import { IconDocument } from "@/icons/document"
import { IconExplore } from "@/icons/explora"
import { IconGlobeDuoToneBlack } from "@/icons/globe-duo-tone-black"
import { IconHome } from "@/icons/home"
import { IconIDuotoneBlack } from "@/icons/i-duotone-black"
import { IconPersonalDevelopment } from "@/icons/personal-development"
import { IconZapDouToneBlack } from "@/icons/zap-dou-tone-black"

export type MenuProps = {
  id: number
  label: string
  icon: JSX.Element
  path: string
  section?: boolean
  integration?: boolean
}

export type GroupMenuProps = {
  id: number
  label: string
  icon: JSX.Element
  path: string
}

export const LANDING_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Home",
    icon: <IconHome />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Pricing",
    icon: <IconCreditCard />,
    path: "#pricing",
    section: true,
  },
  {
    id: 2,
    label: "Explore",
    icon: <IconExplore />,
    path: "/explore",
    section: true,
  },
]

export const GROUP_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Group",
    icon: <IconHome />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Courses",
    icon: <IconCourses />,
    path: "#pricing",
    section: true,
  },
  {
    id: 2,
    label: "Events",
    icon: <IconBusiness />,
    path: "/explore",
  },
  {
    id: 3,
    label: "Members",
    icon: <IconPersonalDevelopment />,
    path: "/explore",
  },
  {
    id: 4,
    label: "About",
    icon: <IconDocument />,
    path: "/explore",
  },
  {
    id: 5,
    label: "Huddle",
    icon: <IconChat />,
    path: "/explore",
  },
]

export const SIDEBAR_SETTINGS_MENU: MenuProps[] = [
  {
    id: 0,
    label: "General",
    icon: <IconIDuotoneBlack />,
    path: "",
  },
  {
    id: 1,
    label: "Subscriptions",
    icon: <IconCreditCard />,
    path: "subscriptions",
  },
  {
    id: 2,
    label: "Affiliates",
    icon: <IconAffiliateDuoToneBlack />,
    path: "affiliates",
  },
  {
    id: 3,
    label: "Domain Config",
    icon: <IconGlobeDuoToneBlack />,
    path: "domains",
  },
  {
    id: 4,
    label: "Integration",
    icon: <IconZapDouToneBlack />,
    path: "integrations",
    integration: true,
  },
]

type IntegrationsListItemProps = {
  id: string
  name: "stripe"
  logo: string
  description: string
  title: string
  modalDescription: string
}

export const INTEGRATION_LIST_ITEMS: IntegrationsListItemProps[] = [
  {
    id: "1",
    name: "stripe",
    description:
      "Stripe is the fastest and easiest way to integrate payments and financial services into your software platform or marketplace.",
    logo: "914be637-39bf-47e6-bb81-37b553163945",
    title: "Connect Stripe Account",
    modalDescription:
      "The world’s most successful platforms and marketplaces including Shopify and DoorDash, use Stripe Connect.",
  },
]
