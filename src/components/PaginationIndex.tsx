import Pagination from '@mui/material/Pagination';
import { Form } from 'react-bootstrap';
// import usePagination from '@mui/material/usePagination';
const PaginationIndex = () => {
    return (
        <div className="d-flex justify-content-between flex-wrap gap-3 f-14">
            <div className="d-flex align-items-center gap-2 ">
                Rows per page
                <Form.Select size="sm" style={{ width: 'auto', display: 'inline' }}>
                    <option>3</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                </Form.Select>
                <span className="ms-2">Showing 1 to 10 of 15 results</span>
            </div>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
    );
};

export default PaginationIndex;
