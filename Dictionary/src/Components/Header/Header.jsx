import Form from "../Form/Form";

export default function Header() {
  return (
    <header
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/15406291/pexels-photo-15406291/free-photo-of-inflation-word-on-smartphone-touchscreen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
      className=" h-56 sm:h-52 2xl:h-96 bg-cover bg-no-repeat flex flex-col justify-center"
    >
      <Form />
    </header>
  );
}

// background: #0F2027;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
