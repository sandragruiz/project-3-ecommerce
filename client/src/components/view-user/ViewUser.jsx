import React from 'react';
import { DELETE_LISTING } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import { ListingForm } from '../create-listing-form/ListingForm';

//import get me query and mutations for creating and deleting listing. Also maybe create a mutation to delete account??

export const ViewUser = () => {
    const { userId } = useParams();

    const { loading, data } = useQuery(GET_USER, {
      variables: { _id: userId },
    });
  
    const user = data?.user || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2 className="card-header">
          Welcome, {user.name}!
        </h2>
  
        <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
            <h3>Create a new listing here!</h3>
                <Link to="/create-listing">
                    <button>
                        Create Listing
                    </button>
                </Link>
                <Link to="/listings/:userId">
                    <button>
                        View Your Listings
                    </button>
                </Link>
        </div>
      </div>
    );
};
