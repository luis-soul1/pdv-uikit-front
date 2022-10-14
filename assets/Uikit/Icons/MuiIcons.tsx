import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUp'
import MoodBadOutlinedIcon from '@mui/icons-material/MoodBadOutlined'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export const MuiIconsList = {
  Add: AddRoundedIcon,
  Check: CheckRoundedIcon,
  Close: CloseRoundedIcon,
  AddCircle: AddCircleOutlinedIcon,
  TalkBox: ChatOutlinedIcon,
  Casino: CasinoOutlinedIcon,
  VideoDisplay: OndemandVideoOutlinedIcon,
  Stories: AutoStoriesOutlinedIcon,
  SmileFace: SentimentVerySatisfiedOutlinedIcon,
  BadMoodFace: MoodBadOutlinedIcon,
  HappyFace: SentimentSatisfiedOutlinedIcon,
  KeyArrowDown: KeyboardArrowDownRoundedIcon,
  KeyArrowRight: KeyboardArrowRightRoundedIcon,
  KeyArrowUp: KeyboardArrowUpRoundedIcon,
  KeyArrowLeft: KeyboardArrowLeftRoundedIcon,
  AddCircleOutlined: AddCircleOutlineIcon
}

export const MuiIcons: Record<string, OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>> = MuiIconsList

export const muiSize = {
  small: 16,
  medium: 24,
  large: 32,
  xlarge: 48
}
