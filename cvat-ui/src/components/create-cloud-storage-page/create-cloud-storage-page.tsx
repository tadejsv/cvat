// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';
import CreateCloudStorageContent from './create-cloud-storage-content';

interface Props {
    // error: string;
    cloudStorageId: number | null;
}

export default function CreateCloudStoragePageComponent(props: Props): JSX.Element {
    const { cloudStorageId } = props; // error

    return (
        <Row justify='center' align='top' className='cvat-create-cloud-storage-form-wrapper'>
            <Col md={20} lg={16} xl={14} xxl={9}>
                <Text className='cvat-title'>Create a new cloud storage</Text>
                <CreateCloudStorageContent cloudStorageId={cloudStorageId} />
            </Col>
        </Row>
    );
}