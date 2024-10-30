import Button from "../_components/Button";

export default function Page() {
  return (
    <main className="grid grid-cols-3 gap-24 p-24 place-items-center">
      <Button size="small">Primary</Button>
      <Button size="small" variant="secondary">
        Secondary
      </Button>
      <Button size="small" variant="danger">
        Danger
      </Button>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button size="large">Primary</Button>
      <Button size="large" variant="secondary">
        Secondary
      </Button>
      <Button size="large" variant="danger">
        Danger
      </Button>
    </main>
  );
}
