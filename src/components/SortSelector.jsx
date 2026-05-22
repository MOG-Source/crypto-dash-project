const SortSelector = ({ sortBy, onSortbyChange }) => {
  return (
    <div className="controls">
      <label htmlFor="sort">Sort By:</label>
      <select
        value={sortBy}
        onChange={(e) => onSortbyChange(e.target.value)}
        id="sort"
      >
        <option value="market_cap_desc">Market Cap (High to low)</option>
        <option value="market_cap_asc">Market Cap (Low to high)</option>
        <option value="price_desc">Price (High to low)</option>
        <option value="price_asc">Price (Low to high)</option>
        <option value="change_desc">24h Change (High to low)</option>
        <option value="change_asc">24h Change (Low to high)</option>
      </select>
    </div>
  );
};

export default SortSelector;
