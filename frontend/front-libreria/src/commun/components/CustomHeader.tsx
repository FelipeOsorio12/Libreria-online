interface CustomHeaderProps {
  items: string[];
}

export const CustomHeader = ({ items }: CustomHeaderProps) => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          {items.map((item) => (
            <a key={item} href="">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
