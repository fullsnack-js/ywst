import tw from "twin.macro";

const styles = {
  container: tw`fixed font-semibold w-full text-center text-white py-2 uppercase z-100`,
  exit: tw`block top-0 right-4 absolute transition opacity-75 duration-150 ease-in-out transform rotate-45 hover:opacity-100`,
};

export const PreviewBanner = () => (
  <div css={styles.container}>
    <h5>Preview Mode</h5>
    <a css={styles.exit} href="/api/exit-preview">
      EXIT
    </a>
  </div>
);
