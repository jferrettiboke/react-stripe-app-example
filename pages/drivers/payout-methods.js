import Layout from "../../components/Layout";
import BankAccountForm from "../../components/stripe/BankAccountForm";

const testData = {
  country: "US",
  currency: "usd",
  routing_number: "110000000",
  account_number: "000123456789",
  account_holder_name: "Jenny Rosen",
  account_holder_type: "individual"
};

export default () => (
  <Layout>
    <div className="bg-white rounded-lg border p-8">
      <div className="mb-8">
        <div className="font-bold mb-2">Test data</div>
        <pre className="p-4 bg-grey-dark text-white">
          {JSON.stringify(testData, 0, 2)}
        </pre>
      </div>

      <h1>Payout methods</h1>
      <BankAccountForm />
    </div>
  </Layout>
);
