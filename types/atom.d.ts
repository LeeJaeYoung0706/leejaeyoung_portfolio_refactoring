
interface LogoComponentPropsInterface {
  logoText: string
  logoFont?: string
  checked: boolean
}

interface HTagComponentPropsInterface {
  index: number
  $styles?: RuleSet<Object>
  content: string
  fontStyle?: string
}

interface ButtonPropsInterface {
  content: React.ReactNode
  $style?: RuleSet<Object>
  onClick: () => void
  font: string
}