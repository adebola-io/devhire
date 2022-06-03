import Developer from "../components/Developer";
import "./Home.css"

export default function Home () {
    return <main className="home-view">
        <h1 className="heading">Hire Top Developers</h1>
        <div className="developers_grid">
            <Developer/>
            <Developer/>
            <Developer/>
            <Developer/>
            <Developer/>
            <Developer/>
            <Developer/>
            <Developer/>
            <Developer/>
            <Developer/>
            <Developer/>
            <Developer/>
        </div>
    </main>
}