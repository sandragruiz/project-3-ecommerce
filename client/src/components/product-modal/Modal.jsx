import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_LISTING_HIDDEN_FIELDS = gql`
  query GetListingHiddenFields($listingId: ID!) {
    getListingHiddenFields(listingId: $listingId) {
      color
      condition
      description
    }
  }
`;

const HiddenFields = ({ listingId }) => {
  const { loading, error, data } = useQuery(GET_LISTING_HIDDEN_FIELDS, {
    variables: { listingId }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching hidden fields.</div>;
  }

  const { color, condition, description } = data.getListingHiddenFields;

  return (
    <div>
      <p>Color: {color}</p>
      <p>Condition: {condition}</p>
      <p>Description: {description}</p>
    </div>
  );
};

HiddenFields();
