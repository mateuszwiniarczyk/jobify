import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import Layout from 'components/Layout';
import OfferForm from 'components/OfferForm';
import Loader from 'components/Loader';
import Alert from 'components/Alert';

const AddOffer = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (!session && !loading) {
      router.push('/signin');
    }
  }, [session, loading]);

  const onSubmit = async (data) => {
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);

    const response = await fetch('/api/offers', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      router.push('/offers/thanks');
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      console.log(payload);
      setError(payload.error?.details[0]?.message);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!loading && !session) {
    return <Layout>Redirecting...</Layout>;
  }

  return (
    <Layout>
      <div className="bg-white p-10 w-full max-w-screen-xl mx-auto">
        <h2 className="text-2xl mb-5 font-semibold">New offer</h2>
        <OfferForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          formProcessing={formProcessing}
          submitLabel="Add offer"
        />

        {error && <Alert type="error" label={`Offer not added: ${error}`} />}
      </div>
    </Layout>
  );
};

export default AddOffer;
