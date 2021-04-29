import { useState } from 'react';
import { getSession } from 'next-auth/client';
import Link from 'next/link';
import classNames from 'classnames';
import getForUser from 'services/offers/getForUser';
import Layout from 'components/Layout';

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) {
    return {
      notFound: true
    };
  }

  const offers = await getForUser(session.user.email);

  return {
    props: {
      offers: offers.map((offer) => offer)
    }
  };
};

const Admin = ({ offers }) => {
  const [currentOffers, setOffers] = useState(offers);

  const deleteOffer = async (id) => {
    const response = await fetch(`/api/offers/${id}`, { method: 'DELETE' });

    if (response.ok) {
      const updatedOffers = currentOffers.filter((offer) => offer.id !== id);
      setOffers(updatedOffers);
    }
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6 overflow-y-auto">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Title</th>
                    <th className="py-3 px-6 text-left">Location</th>
                    <th className="py-3 px-6 text-center">Salary</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {currentOffers.map((offer) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100" key={offer.id}>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{offer.title}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{offer.location}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">{offer.salary}</td>
                      <td className="py-3 px-6 text-center">
                        <span
                          className={classNames('py-1 px-3 rounded-full text-xs', {
                            'bg-red-200 text-red-600': offer.status === 'inactive',
                            'bg-green-200 text-green-600': offer.status === 'active'
                          })}>
                          {offer.status}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <Link href={`/offers/${offer.id}`}>
                            <div className="cursor-pointer w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </div>
                          </Link>
                          <Link href={`/offers/${offer.id}/edit`}>
                            <div className="cursor-pointer w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </div>
                          </Link>
                          <button
                            type="button"
                            className="cursor-pointer w-4 mr-2 transform focus:outline-none hover:text-blue-500 hover:scale-110"
                            onClick={() => deleteOffer(offer.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
