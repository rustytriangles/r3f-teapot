import TeapotGeometry from './Teapot';

describe('constructor', () => {
    test('defaults', () => {
        const expected_name = '';
        const expected_nc = 18;
        const expected_nr = 18;
        const expected_num_patches = 32;
        const expected_num_vertices = expected_num_patches*expected_nr*expected_nc;
        const expected_num_indices = expected_num_patches*(expected_nr-1)*(expected_nc-1)*2*3;

        const t = new TeapotGeometry;

        expect(t.name).toBe(expected_name);
        expect(t.attributes.position.count).toBe(expected_num_vertices);
        expect(t.attributes.normal.count).toBe(expected_num_vertices);
        expect(t.attributes.uv.count).toBe(expected_num_vertices);
        expect(t.index.array.length).toBe(expected_num_indices);
        expect(t.groups[0].start).toBe(0);
        expect(t.groups[0].count).toBe(expected_num_indices);
    });

    test('10 x 12', () => {
        const nc = 10;
        const nr = 12;
        const expected_name = '';
        const expected_num_patches = 32;
        const expected_num_vertices = expected_num_patches*nr*nc;
        const expected_num_indices = expected_num_patches*(nr-1)*(nc-1)*2*3;

        const t = new TeapotGeometry(nr, nc);

        expect(t.name).toBe(expected_name);
        expect(t.attributes.position.count).toBe(expected_num_vertices);
        expect(t.attributes.normal.count).toBe(expected_num_vertices);
        expect(t.attributes.uv.count).toBe(expected_num_vertices);
        expect(t.index.array.length).toBe(expected_num_indices);
        expect(t.groups[0].start).toBe(0);
        expect(t.groups[0].count).toBe(expected_num_indices);
    });
});
