const Container = (props) => {
  const {
    component: Component = props.component || 'div',
    style,
    children,
    ...rest
  } = props;
  return (
    <Component
      {...rest}
      style={{
        ...style,
        paddingLeft: 'var(--page-padding)',
        paddingRight: 'var(--page-padding)',
      }}
    >
      {children}
    </Component>
  );
};
export default Container;
