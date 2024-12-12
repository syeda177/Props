import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-white min-h-screen cursor-pointer text-blue-400 text-2xl p-6 m-6 font-bold text-center ">
      
      <ul>

        <button
    style={{
        padding: '10px',          // Consistent padding on all sides
        margin: '10px',           // Equal margin around the button
        backgroundColor: '#0070f3', 
        color: 'white',
        border: 'none',           // Removes any default border
        borderRadius: '5px',      // Adds rounded corners
        cursor: 'pointer',        // Changes the cursor on hover
        display: 'inline-block',  // Ensures proper spacing for inline buttons
    }}
>
<li><Link href="/about">about</Link></li>
</button>
<button
    style={{
        padding: '10px',          // Consistent padding on all sides
        margin: '10px',           // Equal margin around the button
        backgroundColor: '#0070f3', 
        color: 'white',
        border: 'none',           // Removes any default border
        borderRadius: '5px',      // Adds rounded corners
        cursor: 'pointer',        // Changes the cursor on hover
        display: 'inline-block',  // Ensures proper spacing for inline buttons
    }}
>
<li><Link href="/contact">contact</Link></li>
</button>

<button
    style={{
        padding: '10px',          // Consistent padding on all sides
        margin: '10px',           // Equal margin around the button
        backgroundColor: '#0070f3', 
        color: 'white',
        border: 'none',           // Removes any default border
        borderRadius: '5px',      // Adds rounded corners
        cursor: 'pointer',        // Changes the cursor on hover
        display: 'inline-block',  // Ensures proper spacing for inline buttons
    }}
>
<li><Link href="/footer">footer</Link></li>
</button>  
      </ul>
      <h1 className="text-blue-800 text-5xl cursor-default mb-10 flex-col space-y-9 p-10">THIS IS HOMEPAGE</h1>
       


    </div>
  );
}
