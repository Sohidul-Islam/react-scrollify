<h1 align="center">react-scroll-pagify</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react-scrollify-paginate-y"><img src="https://img.shields.io/npm/v/react-scrollify-paginate-y.svg" alt="npm version"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="https://www.npmjs.com/package/react-scrollify-paginate-y"><img src="https://img.shields.io/npm/dt/react-scrollify-paginate-y.svg" alt="npm downloads"></a>
  <a href="https://github.com/Sohidul-Islam/react-scrollify/stargazers"><img src="https://img.shields.io/github/stars/Sohidul-Islam/react-scrollify.svg" alt="GitHub stars"></a>
  <a href="https://github.com/Sohidul-Islam/react-scrollify/issues"><img src="https://img.shields.io/github/issues/Sohidul-Islam/react-scrollify.svg" alt="GitHub issues"></a>
  <a href="https://github.com/Sohidul-Islam/react-scrollify/commits/main"><img src="https://img.shields.io/github/last-commit/Sohidul-Islam/react-scrollify.svg" alt="GitHub last commit"></a>
</p>

A lightweight React component that provides infinite scroll and pagination functionality for data-driven applications. It simplifies the process of paginating large datasets by dynamically loading and rendering new data as the user scrolls.

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Props](#props)
- [Pagination](#pagination)
- [Customization](#customization)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm or yarn:

```bash
npm install react-scrollify-paginate-y
```

or

```bash
yarn add react-scrollify-paginate-y
```

## Basic Usage

Here's a basic example of how to use the `ReactScrollify` component:

```jsx
import React, { useState } from "react";
import { ReactScrollify } from "react-scrollify-paginate-y";

const YourComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const totalPages = 50; // Calculate based on your total data

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch or update your data here
  };

  const handleRefresh = () => {
    // Implement refresh logic here
  };

  return (
    <ReactScrollify
      data={data}
      onChangePage={handlePageChange}
      pagination={{
        page: currentPage,
        totalPage: totalPages,
      }}
      onRefresh={handleRefresh}
      enablePulling={true}
    >
      {/* You have to make component with data props. without data props it will not work */}
      <YourListComponent data={[]} />
    </ReactScrollify>
  );
};
```

## Props

| Prop                   | Type                                          | Default | Description                                                                                                                                                                                              |
| ---------------------- | --------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children               | React.ReactNode                               | -       | The content to be rendered within the scrollable sections                                                                                                                                                |
| threshold              | number                                        | -       | The scroll threshold to trigger page changes                                                                                                                                                             |
| data                   | T[]                                           | -       | The array of data to be paginated and displayed                                                                                                                                                          |
| onChangePage           | (page: number) => void                        | -       | Callback triggered when the page changes                                                                                                                                                                 |
| onDataChange           | (data:T[]) => void                            | -       | Callback triggered when the data changes and you can customize your data on that                                                                                                                         |
| onLoadMore             | (page: number) => void                        | -       | Callback triggered when the click on load more button                                                                                                                                                    |
| pagination             | { page: number; totalPage: number }           | -       | Object with current page and total pages information                                                                                                                                                     |
| isLoading              | boolean                                       | false   | Indicates if data is currently loading                                                                                                                                                                   |
| enableDataMemorization | boolean                                       | true    | Indicates the given data should memorize or not. if enable it will enable the data otherswise not.                                                                                                       |
| loadingOverlay         | React.ReactNode                               | -       | Custom loading overlay component                                                                                                                                                                         |
| loadMoreButton         | React.ReactNode                               | -       | Custom Load more button component                                                                                                                                                                        |
| styleRootElement       | Record<string, string \| number \| undefined> | -       | Custom styles for the root element                                                                                                                                                                       |
| rootClassName          | string                                        | -       | Custom class name for the root element                                                                                                                                                                   |
| rootElementId          | string                                        | -       | Custom ID for the root element                                                                                                                                                                           |
| enableLoadMoreButton   | boolean                                       | false   | Enable or disable the load more button                                                                                                                                                                   |
| enablePulling          | boolean                                       | false   | Enable or disable pull-to-refresh functionality                                                                                                                                                          |
| pulingOptions          | { position: number \| string \| undefined }   | -       | Options for pull-to-refresh behavior. note: by default it will work when the root element in scrolling possition in top. you can pass any position number or "any" - it will work every places you want. |
| onRefresh              | () => void                                    | -       | Callback function for refresh action                                                                                                                                                                     |

## Pagination

Control page management using the `pagination` prop:

```jsx
<ReactScrollify
  // ...other props
  pagination={{
    page: currentPage,
    totalPage: totalPages,
  }}
>
  {/* Your content */}
</ReactScrollify>
```

## Customization

### Styling

Customize the scroll container:

```jsx
<ReactScrollify
  styleRootElement={{ height: "400px", overflowY: "auto" }}
  rootClassName="custom-scrollify-container"
  rootElementId="my-scrollify-container"
>
  {/* Your content */}
</ReactScrollify>
```

### Pull-to-Refresh

Enable pull-to-refresh functionality:

```jsx
<ReactScrollify
  enablePulling={true}
  pulingOptions={{ position: 60 }}
  onRefresh={handleRefresh}
>
  {/* Your content */}
</ReactScrollify>
```

## Examples

### Paginating API Data

```jsx
const [data, setData] = useState([]);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

const fetchData = async (page) => {
  const response = await fetch(`https://api.example.com/data?page=${page}`);
  const { results, total_pages } = await response.json();
  setData((prevData) => [...prevData, ...results]);
  setTotalPages(total_pages);
};

const handlePageChange = (newPage) => {
  setPage(newPage);
  fetchData(newPage);
};

return (
  <ReactScrollify
    data={data}
    onChangePage={handlePageChange}
    pagination={{ page, totalPage: totalPages }}
    isLoading={isLoading}
    loadingOverlay={<div>Loading...</div>}
  >
    {/* You have to make component with data props. without data props it will not work */}
    <YourListComponent data={[]} />
  </ReactScrollify>
);
```

### Custom Scrolling Behavior

```jsx
<ReactScrollify
  threshold={100}
  enableLoadMoreButton={true}
  onChangePage={handlePageChange}
  // ...other props
>
  {/* Your content */}
  {isLastPage && <div>No more data to load</div>}
</ReactScrollify>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
