import ItemList from "./item-list";
import Toggle from "../app/lifting-stateup/page";

export default function Home() {
    return (
        <main className="flex flex-col p-4">
            <ItemList />
            <Toggle />
        </main>
    );
}
