
interface ContainerPropsInterface extends ComponentPropsInterface {
  children: React.ReactNode
}

interface MainPropsInterface extends ComponentPropsInterface {
  children: React.ReactNode
}

interface HeaderPropsInterface extends ComponentPropsInterface {
  isTop: boolean
  children: React.ReactNode[]
  checked: boolean
}
