import ProtectedLayout from "@/components/layouts/ProtectedLayout";

export default function Home() {
    return (
        <ProtectedLayout>
            <main>
                <h1>Hello World</h1>
            </main>
        </ProtectedLayout>
    );
}
