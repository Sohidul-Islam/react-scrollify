# react-scrollify-paginate-y

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
  const pageSize = 20;
  const totalPages = 50; // Calculate based on your total data

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch or update your data here
  };

  return (
    <ReactScrollify
      data={yourDataArray}
      onChangePage={handlePageChange}
      pagination={{
        page: currentPage,
        totalPage: totalPages,
      }}
    >
      {/* Your list component here */}
    </ReactScrollify>
  );
};
```

## Props

| Prop         | Type     | Description                                                         |
| ------------ | -------- | ------------------------------------------------------------------- |
| data         | Array    | The array of data to be paginated and displayed.                    |
| onChangePage | Function | Callback triggered when the page changes. Receives new page number. |
| pagination   | Object   | Object with `page` (current page) and `totalPage` properties.       |

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

### Dynamic Data Loading

Fetch new data as the user scrolls:

```jsx
const handlePageChange = async (page) => {
  const newData = await fetchDataFromAPI(page);
  setData((prevData) => [...prevData, ...newData]);
  setCurrentPage(page);
};
```

### Styling

Customize the scroll container:

```jsx
<div style={{ height: "400px", overflowY: "auto" }}>
  <ReactScrollify
  // ...props
  >
    {/* Your content */}
  </ReactScrollify>
</div>
```

## Examples

- Paginating API Data
- Displaying Large Lists
- Custom Scrolling Behavior

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
