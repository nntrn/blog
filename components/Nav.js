import Link from 'next/link';
import Container from './Container'

const style = {
  zIndex: 1000,
  background: 'white',
  padding: '1rem var(--page-padding)',
  width: '100%',
  left: 0,
}

export default  ({routes, ...rest}) => {
  return (
    <Container component="nav" style={style} {...rest}>
      {Object.keys(routes).map((e) => (
        <Link href={routes[e]} key={e}>
          <a style={{marginRight: '.5rem'}}>{e}</a>
        </Link>
      ))}
    </Container>
  );
};
