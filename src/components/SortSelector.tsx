import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useCategories from "../hooks/useCategories";

// interface Props {
//   onSelectSortOrder: (sortOrder: string) => void;
//   sortOrder: string;
// }

const SortSelector = () =>
  // { onSelectSortOrder, sortOrder }: Props
  {
    const { data: categories } = useCategories();
    const sortOrders = [
      { value: "", label: "Relevance" },
      { value: "-added", label: "Date added" },
      { value: "name", label: "Name" },
      { value: "-released", label: "Release date" },
      { value: "-metacritic", label: "Popularity" },
      { value: "-rating", label: "Average rating" },
    ];

    // const currentSortOrder = sortOrders.find(
    //   (order) => order.value === sortOrder
    // );

    return (
      <Menu>
        <MenuButton
          minWidth={"100px"}
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          نوع
          {/* {currentSortOrder?.label || "Relevance"} */}
        </MenuButton>
        <MenuList>
          {categories.map((category) => (
            <MenuItem
              // onClick={() => onSelectSortOrder(order.value)}
              key={category.attributes.Name}
              value={category.attributes.Name}
            >
              {category.attributes.Name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  };

export default SortSelector;
