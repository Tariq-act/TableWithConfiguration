import React, { useState } from 'react';
import '../Table/Table.style.css';
import { ReactComponent as Profile } from '../../assets/images/profile.svg';
import { ReactComponent as ArrowUpDown } from '../../assets/images/ArrowsDownUp.svg';
import moment from 'moment';

const Table = ({ data, tableConfigure }) => {
  const [{ name }, { city }, { email }, { date }, { role }] = tableConfigure;
  const [sortData, setSortData] = useState(data);
  const [sortOrder, setSortOrder] = useState('asc');

  // const headers = [
  //   { key: 'name', label: 'Name' },
  //   { key: 'city', label: 'City' },
  //   { key: 'email-address', label: 'Email Address' },
  //   { key: 'joining-date', label: 'Joining Date' },
  //   { key: 'role', label: 'Role' },
  // ];

  // const sorting = (col) => {
  //   if (sortOrder === 'asc') {
  //     const sorted = [...data].sort((a, b) =>
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //     );
  //     setSortData(sorted);
  //     setSortOrder('desc');
  //   }

  //   // console.log(data);

  //   if (sortOrder === 'desc') {
  //     const sorted = [...data].sort((a, b) =>
  //       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
  //     );
  //     setSortData(sorted);
  //     setSortOrder('asc');
  //   }
  // };

  // // sorting();

  const sortByCity = () => {
    if (city.sort) {
      if (sortOrder === 'asc') {
        const sortedData = sortData.sort((a, b) => {
          return a.city.toLowerCase() > b.city.toLowerCase() ? 1 : -1;
        });
        setSortData(sortedData);
        setSortOrder('desc');
      }

      if (sortOrder === 'desc') {
        const sortedData = sortData.sort((a, b) => {
          return a.city.toLowerCase() < b.city.toLowerCase() ? 1 : -1;
        });
        setSortData(sortedData);
        setSortOrder('asc');
      }
    }
  };

  // Name

  const sortByName = () => {
    if (name.sort) {
      if (sortOrder === 'asc') {
        const sortedData = sortData.sort((a, b) => {
          return a.person.name.toLowerCase() > b.person.name.toLowerCase()
            ? 1
            : -1;
        });
        setSortData(sortedData);
        setSortOrder('desc');
      }

      if (sortOrder === 'desc') {
        const sortedData = sortData.sort((a, b) => {
          return a.person.name.toLowerCase() < b.person.name.toLowerCase()
            ? 1
            : -1;
        });
        setSortData(sortedData);
        setSortOrder('asc');
      }
    }
  };

  // email
  const sortByEmail = () => {
    if (email.sort) {
      if (sortOrder === 'asc') {
        const sortedData = sortData.sort((a, b) => {
          return a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1;
        });
        setSortData(sortedData);
        setSortOrder('desc');
      }

      if (sortOrder === 'desc') {
        const sortedData = sortData.sort((a, b) => {
          return a.email.toLowerCase() < b.email.toLowerCase() ? 1 : -1;
        });
        setSortData(sortedData);
        setSortOrder('asc');
      }
    }
  };

  // Date
  const sortByDate = () => {
    if (date.sort) {
      if (sortOrder === 'asc') {
        const sortedData = sortData.sort((a, b) => {
          const d1 = moment(new Date(a.joiningDate), 'DD MM YYYY')._i;
          const d2 = moment(new Date(b.joiningDate), 'DD MM YYYY')._i;
          return d1 > d2 ? 1 : -1;
        });
        setSortData(sortedData);
        setSortOrder('desc');
      }

      if (sortOrder === 'desc') {
        const sortedData = sortData.sort((a, b) => {
          const d1 = moment(new Date(a.joiningDate), 'DD MM YYYY')._i;
          const d2 = moment(new Date(b.joiningDate), 'DD MM YYYY')._i;
          return d1 < d2 ? 1 : -1;
        });
        setSortData(sortedData);
        setSortOrder('asc');
      }
    }
  };

  // Role
  const sortByRole = () => {
    if (role.sort) {
      if (sortOrder === 'asc') {
        const sortedData = sortData.sort((a, b) => {
          return a.role.toLowerCase() > b.role.toLowerCase() ? 1 : -1;
        });
        setSortData(sortedData);
        setSortOrder('desc');
      }

      if (sortOrder === 'desc') {
        const sortedData = sortData.sort((a, b) => {
          return a.role.toLowerCase() < b.role.toLowerCase() ? 1 : -1;
        });
        setSortData(sortedData);
        setSortOrder('asc');
      }
    }
  };

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            {name.col && (
              <th onClick={sortByName}>
                <span>Name</span>
                {name.sort && (
                  <span className='arrow'>
                    <ArrowUpDown />
                  </span>
                )}
              </th>
            )}
            {city.col && (
              <th onClick={sortByCity}>
                <span>City</span>
                {city.sort && (
                  <span className='arrow'>
                    <ArrowUpDown />
                  </span>
                )}
              </th>
            )}
            {email.col && (
              <th onClick={sortByEmail}>
                <span>Email Address</span>
                {email.sort && (
                  <span className='arrow'>
                    <ArrowUpDown />
                  </span>
                )}
              </th>
            )}
            {date.col && (
              <th onClick={sortByDate}>
                <span>Joining Date</span>
                {date.sort && (
                  <span className='arrow'>
                    <ArrowUpDown />
                  </span>
                )}
              </th>
            )}
            {role.col && (
              <th onClick={sortByRole}>
                <span>Role</span>
                {role.sort && (
                  <span className='arrow'>
                    <ArrowUpDown />
                  </span>
                )}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {sortData.map((person, idx) => (
            <tr key={idx}>
              {name.col && (
                <td className='profile-img'>
                  <span>
                    <Profile />
                  </span>
                  <span>{person.person.name}</span>
                </td>
              )}
              {city.col && <td>{person.city}</td>}
              {email.col && <td>{person.email}</td>}
              {date.col && <td>{person.joiningDate}</td>}
              {role.col && <td>{person.role}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
