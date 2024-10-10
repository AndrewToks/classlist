import Head from "next/head";
import styles from "../../styles/classlist.module.css"
import Link from "next/link"

export const getStaticProps = async () =>{
    const res = await fetch('/data.json');
    const data = await res.json();

    return{
        props:{students:data}
    }
}

const Sen = ({students}) => {

    return (
        <>
    <Head>
        <title>SEN | Class List </title>
        <meta name="keywords" content="classlist" />
    </Head>
    <div>
        <h1>All Students</h1>
        {students.map(student =>(
          <Link href={"./classlist" + "/" + student.id} key={student.id} className={styles.single}>
                <h3>{student.name}</h3>
          </Link>  
        ))}
    </div>
        </>
    );
}
 
export default Sen;