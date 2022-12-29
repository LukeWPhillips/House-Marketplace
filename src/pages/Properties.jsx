import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";

import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

function Offers() {
  const [loading, setLoading] = useState(true);

  const [filteredList, setFilteredList] = useState();
  const [filter, setFilter] = useState();
  // eslint-disable-next-line
  const [selectedBedrooms, setSelectedBedrooms] = useState();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const listingsRef = collection(db, "listings");
        const docSnap = await getDocs(listingsRef);

        let listing = [];

        docSnap.forEach((doc) => {
          // console.log(doc.data());
          return listing.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setFilteredList(listing);
        setLoading(false);
      } catch (error) {
        toast.error("Could Not Fetch Listings");
      }
    };

    fetchListing();
  }, []);

  const selectBedrooms = (e) => {
    const search = e.target.value;
    setLoading(true);

    const newList = filteredList.filter((item) => {
      return item.data.bedrooms === search;
    });
    setFilter(newList);
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="profile">
        <header className="pofileHeader">
          <p className="pageHeader">Properties</p>
        </header>

        <div className="search-wrapper">
          <label
            htmlFor="Bedrooms"
            style={{ fontWeight: "500", fontSize: "20px" }}
          >
            Select Number of Bedrooms:
          </label>
          <input
            type="number"
            className="input w-full max-w-xs"
            name="bedrooms"
            id="bedrooms"
            onChange={selectBedrooms}
            value={selectedBedrooms}
            min="0"
            max="5"
          />
        </div>

        <main className="properties-main">
          {!loading && filter?.length > 0 && (
            <ul className="listingsList">
              {filter.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Offers;
