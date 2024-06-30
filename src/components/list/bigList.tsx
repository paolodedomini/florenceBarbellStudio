import style from "./list.module.scss";
type Tdata = { titolo: string };

function BigList({ data }: { data: Tdata[] }) {
  return (
    <div className={style.bigList}>
      <ul>
        {data.map((el, i) => (
          <li key={i}>{el.titolo}</li>
        ))}
      </ul>
    </div>
  );
}

export default BigList;
