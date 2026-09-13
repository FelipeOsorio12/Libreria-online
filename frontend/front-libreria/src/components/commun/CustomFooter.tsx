interface CustomFooterProps {
  descriptionFooter: string;
}

export const CustomFooter = ({ descriptionFooter }: CustomFooterProps) => {
  return (
    <footer>
      <p id="footer-text">{descriptionFooter}</p>
    </footer>
  );
};
