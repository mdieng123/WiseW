
import React, { useState } from 'react';
import './Folder.css'; // Add styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Folder = ({ header }) => {
  return (
    <div class="container mt-5 ">
      <div class="col">
        <div class="d-flex flex-row bg-highlight mb-3">
          <div class="p-3 bg-success margin-0">Flex item 1</div>
        </div>
        <div class="row">
            <div class="bg-primary p-3">Element 3</div>
        </div>
      </div>
    </div>
  );
};

Folder.defaultProps = {
  header: 'Default',
};

export default Folder;