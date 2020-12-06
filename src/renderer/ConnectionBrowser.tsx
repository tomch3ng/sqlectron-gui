import React from 'react';
import { theme } from './theme';
import { QuerySection } from './components/QuerySection';
import { DatabaseListModal } from './components/DatabaseListModal';
import { ConnectionSidebar } from './components/ConnectionSidebar';
import { ConnectionTopbar } from './components/ConnectionTopbar';
import { RecordForm } from './components/RecordForm';
import { Resizable } from 're-resizable';

import { Grid, GridItem, useDisclosure } from '@chakra-ui/react';

// Styles
import './App.css';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid
        h='100vh'
        w='100vw'
        gap={0}
        templateColumns='min-content auto min-content'
        templateRows='min-content auto min-content'
      >
        <GridItem gridColumn='span 3'>
          <ConnectionTopbar onDatabaseButtonClick={onOpen} />
        </GridItem>
        <GridItem
          gridColumn='span 1'
          css={{
            overflow: 'hidden',
            height: '100%',
          }}
        >
          {/*<Box
          w='80px'
          borderRightWidth='1px'
          borderRightStyle='solid'
          borderRightColor='gray.700'
        >
          <DatabasesSidebar />
        </Box>*/}
          <Resizable
            minWidth='100px'
            maxWidth='45vw'
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            defaultSize={{
              width: '250px',
              height: '100%',
            }}
            style={{
              background: theme.colors.darkThemeApp.sidebarPanelBg,
              borderRight: `1px solid ${theme.colors.darkThemeApp.barCompoenentBorderColor}`,
            }}
          >
            <ConnectionSidebar />
          </Resizable>
        </GridItem>
        <GridItem
          gridColumn='span 1'
          css={{
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <QuerySection />
        </GridItem>
        <GridItem
          gridColumn='span 1'
          css={{
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Resizable
            minWidth='100px'
            maxWidth='45vw'
            enable={{
              top: false,
              right: false,
              bottom: false,
              left: true,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            defaultSize={{
              width: '250px',
              height: '100%',
            }}
            style={{
              background: theme.colors.darkThemeApp.sidebarPanelBg,
              borderLeft: `1px solid ${theme.colors.darkThemeApp.barCompoenentBorderColor}`,
            }}
          >
            <RecordForm />
          </Resizable>
        </GridItem>
      </Grid>
      <DatabaseListModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;
