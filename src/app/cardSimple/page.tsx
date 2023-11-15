import Card from "./Card"

async function getData() {
  try{
    let url="https://jsonplaceholder.typicode.com/todos";
    let res = await fetch(url);
    return await res.json();
  
    //return await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json());
  }catch(error){
    console.log(error);
    return [];
  }
}

interface post{
  userId: number;
  id:number;
  title: string;
  completed: boolean;
}

export default async function CardSimple() {
  const posts = await getData();
    return (
      <>
      <section className="p-24">
        <h1 className="font-serif text-white text-center text-6xl mb-5">Json PlaceHolder</h1>
          <div className="grid grid-cols-4 gap-4">
          {
              Object.keys(posts).length === 0  ? (
                <p><strong> No hay elementos en la lista </strong></p>
              ) : (
                posts.map((post:post) => (
                  <Card key={post.id} id={post.id} text={post.title} status={post.completed}/>
                  ))
              )
            }
          </div>
      </section>
      </>
    )
  }



