export default {
  name: 'fattorip',
  components: {}, 
  props: [],
  data () {
    return {
       n: null, 
    }
  },
  computed: {
    q: function() { return this.n * this.n }
  },
  mounted () {

  },
  methods: {

    triplo(x) { return 3 * x },

    scomp(x) {
      var out = [ ];
      if ( x <= 2 ) {
        out.push(Number(x));
        return out;
      }
      var f = 2;
      while ( x > 1 ) {
        while (x % f == 0) {
          out.push(f);
          x = x / f;
        } // endwhile
        f++;
      } // end while
      return '<b>'+out+'</b>';
    } // end scomp()

  }
}
