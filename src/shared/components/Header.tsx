interface HeaderProps {
  title: string;
  description?: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <header className="content-center">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  )
}

export default Header
