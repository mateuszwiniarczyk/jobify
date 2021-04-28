import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from 'components/Layout';
import { getSession } from 'next-auth/client';
import getOfferById from 'services/offers/get';
import isAuthorized from 'services/offers/isAuthorized';
import OfferForm from 'components/OfferForm';

export const getServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req });
  const offer = await getOfferById(query.id);

  if (!isAuthorized(offer, session) || !offer) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      offer
    }
  };
};

const EditOffer = ({
  offer: {
    id,
    title,
    location,
    skills,
    salary,
    type,
    experience,
    employmentType,
    flexibleHours,
    remotePossible,
    paidHoliday,
    onlineInterview,
    phone,
    jobDescription
  }
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title,
      location,
      skills,
      salary,
      type,
      experience,
      employmentType,
      flexibleHours,
      remotePossible,
      paidHoliday,
      onlineInterview,
      phone,
      jobDescription
    }
  });
  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);

    const response = await fetch(`/api/offers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      router.push(`/offers/${id}`);
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setError(payload.error?.details[0]?.message);
    }
  };

  return (
    <Layout>
      <div className="bg-white p-10 w-full max-w-screen-xl mx-auto">
        <h2 className="text-2xl mb-5 font-semibold">Edit</h2>
        <OfferForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          formProcessing={formProcessing}
          submitLabel="Edit offer"
        />
        {error && (
          <div className="block justify-center w-full my-5 col-span-12">
            <span className="block bg-red-600 w-full rounded text-white text-center p-5">
              Offer not added: {error}
            </span>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EditOffer;
