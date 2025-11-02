import { useParams } from "react-router-dom";
import books from "../../../data/newbook.js"

export const Newbook = () => {
  const { id } = useParams();


  const book = books.find((b) => b.id === Number(id));

  return (
    <div className="container flex gap-10 py-10">
      {/* Chap tomonda rasm */}
      <div className="w-1/3">
        <img
          src={book.image}
          alt={book.title}
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* O‘ng tomonda ma’lumotlar */}
      <div className="w-2/3">
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p className="text-gray-600 mb-4">{book.author}</p>

        <table className="w-full text-left border-collapse mb-4">
          <tbody>
            <tr><td className="font-semibold">ISBN:</td><td>{book.isbn}</td></tr>
            <tr><td className="font-semibold">Тил:</td><td>{book.lang}</td></tr>
            <tr><td className="font-semibold">Саҳифалар:</td><td>{book.pages}</td></tr>
            <tr><td className="font-semibold">Нашриёт:</td><td>{book.publisher}</td></tr>
            <tr><td className="font-semibold">Чоп этилган сана:</td><td>{book.date}</td></tr>
          </tbody>
        </table>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Сотиб олиш – {book.price}
        </button>
      </div>
    </div>
  );
};
