import { IconBusiness } from "@/icons/bisiness"
import { IconFitness } from "@/icons/fitness"
import { IconLifeStyle } from "@/icons/life-style"
import { IconMusic } from "@/icons/music"
import { IconPersonalDevelopment } from "@/icons/personal-development"
import { IconSocialMedia } from "@/icons/social-media"
import { IconTech } from "@/icons/tech"
import { RefreshCcw } from "lucide-react"

export type GroupListProps = {
  id: string
  label: string
  icon: JSX.Element
  path: string
}

export const GROUP_LIST: GroupListProps[] = [
  {
    id: "0",
    label: "All",
    icon: <RefreshCcw />,
    path: "",
  },
  {
    id: "1",
    label: "Fitness",
    icon: <IconFitness />,
    path: "fitness",
  },
  {
    id: "2",
    label: "Music",
    icon: <IconMusic />,
    path: "music",
  },
  {
    id: "3",
    label: "Business",
    icon: <IconBusiness />,
    path: "business",
  },
  {
    id: "4",
    label: "Lifestyle",
    icon: <IconLifeStyle />,
    path: "lifestyle",
  },
  {
    id: "5",
    label: "Personal Development",
    icon: <IconPersonalDevelopment />,
    path: "personal-development",
  },
  {
    id: "6",
    label: "Social Media",
    icon: <IconSocialMedia />,
    path: "social-media",
  },
  {
    id: "7",
    label: "Tech",
    icon: <IconTech />,
    path: "tech",
  },
]
