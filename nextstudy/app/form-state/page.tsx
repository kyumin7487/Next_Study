import AddToCartForm from "./cart-form";

export default function Home() {
    return (
        <main className="flex flex-col p-4 space-y-2">
            <AddToCartForm itemID="1" itemTitle="리액트 완벽가이트" />
            <AddToCartForm itemID="2" itemTitle="리액트 실무기술" />
            <AddToCartForm itemID="2" itemTitle="Node.js 교과서" />
        </main>
    )
}