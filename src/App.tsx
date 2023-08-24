import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import PageNotFound from 'pages/PageNotFound';

const App = () => {
  return (
    <Flex alignItems="center" flexDirection={'column'} height={'90vh'} justifyContent={'center'} width={'100vw'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Flex>
  );
};

export default App;
