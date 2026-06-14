const components = {
  a: (props) => (
    <a
      {...props}
      className="text-blue-400 hover:text-red-500 transition-colors duration-200"
    />
  ),
};

export function useMDXComponents() {
  return components;
}
